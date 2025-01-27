import { FormEvent, useRef, useState } from "react";
import { Close, Delete, Plus } from "../Icon/Icon";
import { AddButton, CloseButton, Input, InputContainer, RelayItem, RelayList, RelaysCardHeader, RelaysContainer, SaveButton } from "./Relays.styled";
import { ErrorText, Pointer } from "../../shared/Global.styled";
import { useRelaysContext } from "../../contexts/relays.context";
import { getBreakpoint } from "../../shared/utils";

export type RelaysModalProps = {
    isOpen: boolean;
    onClose: () => void;
};

const breakpoint = getBreakpoint();

export function RelaysModal({
    isOpen,
    onClose,
}: RelaysModalProps) {
    const { relays: relaysFromContext, setRelays: setRelaysInContext } = useRelaysContext();

    const [ relays, setRelays ] = useState<string[]>(relaysFromContext || []);
    const inputRef = useRef<HTMLInputElement>(null);

    const [ isError, setIsError ] = useState(false);

    const onAddRelay = (e: MouseEvent | FormEvent) => {
        e.preventDefault();

        if(!inputRef || !inputRef.current) return;

        const relay = inputRef.current.value;

        setRelays(prev => [...prev, relay]);
        inputRef.current.value = '';
    }

    const onDeleteRelay = (relay: string) => {
        setRelays(prev => prev.filter(r => r !== relay));
    }

    const onSave = () => {
        if(relays.length === 0) {
            setIsError(true);
            return;
        }

        setRelaysInContext(relays);
        onClose();
    }

    let styles = {};

    if(breakpoint === 'small' || breakpoint === 'medium') {
        styles = {
            display: isOpen ? 'flex': 'none',
        }
    } else {
        styles = {
            transform: isOpen ? 'translateX(100%)': 'translateX(95%)',
            opacity: isOpen ? 1: 0,
            pointerEvents: isOpen ? 'all' : 'none',
        };
    }

    return (
        <RelaysContainer className="relays-modal" style={styles}>
            <RelaysCardHeader>
                <label htmlFor="relay-address">Relay address</label>
                <CloseButton onClick={() => onClose()} aria-label="Close relay modal button">
                    <Close />
                </CloseButton>
            </RelaysCardHeader>

            <main>
                <form onSubmit={onAddRelay}>
                    <InputContainer>
                        <Input
                            id="relay-address"
                            type="text"
                            placeholder="wss://relay.primal.net"
                            ref={inputRef}
                        />
                        <AddButton onClick={onAddRelay} aria-label="Add a relay button">
                            <Plus/>
                        </AddButton>
                    </InputContainer>
                </form>

                <RelayList>
                    {
                        isError
                        ? <ErrorText style={{transform: 'unset', textAlign: 'start'}}>Set at least one relay</ErrorText>
                        : null
                    }
                    {
                        relays.map((relay, index) => (
                            <RelayItem key={relay + index}>
                                <span>{relay}</span>
                                <Pointer onClick={() => onDeleteRelay(relay)}>
                                    <Delete/>
                                </Pointer>
                            </RelayItem>
                        ))
                    }
                </RelayList>
            </main>

            <SaveButton
                onClick={onSave}
            >
                Save
            </SaveButton>
        </RelaysContainer>
    )
}
