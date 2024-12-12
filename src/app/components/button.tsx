import { JSX } from "react";
import styled from "styled-components";

const IconButtonIcon = styled.div`
    width: 16px;
    height: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const IconButtonText = styled.div`
    font-size: 12px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`;

const IconButton_ = styled.button`
    background-color: var(--white);
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    cursor: pointer;
    transition: all 0.3s ease;
    overflow: hidden;
    user-select: none;
    outline: none;
    border: none;
    color: var(--black);

    &.button-class{
        background-color: var(--primary);
        color: white;
        position: absolute;
        right: 30px;
        bottom: 32px;
    };
`;

export default function IconButton(props: {
    onClick?: () => void;
    icon?: JSX.Element;
    text?: string;
    className?: string;
}) {
    return (
        <IconButton_ onClick={props.onClick} className={props.className}>
            {props.icon && <IconButtonIcon>{props.icon}</IconButtonIcon>}
            {props.text && <IconButtonText>{props.text}</IconButtonText>}
        </IconButton_>
    );
}
