"use client";

import styled from "styled-components";
import Avatar from "@/app/components/avatar";
import { RequestMessage } from "@/app/client/api";
import Markdown from "react-markdown";

const ChatBodyContainer = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    flex: 1;
    width: 100%;
`;

const ChatMessageHeader = styled.div`
    
`;
const ChatMessageItems = styled.div`
    box-sizing: border-box;
    max-width: 100%;
    margin-top: 10px;
    border-radius: 10px;
    background-color: rgba(0, 0, 0, 0.05);
    padding: 10px;
    font-size: 14px;
    user-select: text;
    word-break: break-word; //长单词断开避免溢出
    border: var(--border-in-light);
    transition: all ease 0.3s;
`;

const ChatMessage = styled.div<{ $isUser: boolean }>`
    display: flex;
    flex-direction: ${(props) => (props.$isUser ? "row-reverse" : "row")};
`;

const ChatMessageContent = styled.div<{ $isUser: boolean }>`
    display: flex;
    flex-direction: column;
    align-items: ${(props)=>(props.$isUser?"flex-end":"flex-start")};
`;

export default function Chat() {
    const messages: RequestMessage[] = [
        {
            role: "system",
            content: "这是系统的Content",
        },
        {
            role: "user",
            content: "这是聊天的Content",
        },
    ];
    return (
        <>
            <ChatBodyContainer>
                {messages?.map((message, index) => {
                    const isUser = message.role === "user";
                    const messageContent = message.content as string;
                    return (
                        <ChatMessage $isUser={isUser} key={index}>
                            <ChatMessageContent $isUser={isUser}>
                                <ChatMessageHeader>
                                    {<Avatar isUser={isUser} />}
                                </ChatMessageHeader>
                                <ChatMessageItems>
                                    <Markdown>
                                        {messageContent}
                                    </Markdown>
                                </ChatMessageItems>
                            </ChatMessageContent>
                        </ChatMessage>
                    );
                })}
            </ChatBodyContainer>
        </>
    );
}
