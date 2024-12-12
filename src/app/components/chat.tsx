"use client";

import styled from "styled-components";
import Avatar from "@/app/components/avatar";
import { RequestMessage } from "@/app/client/api";
import Markdown from "react-markdown";
import IconButton from "@/app/components/button";
import Send from "@/app/icons/send.svg";

const ChatBodyContainer = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    flex: 1;
    width: 100%;
    overscroll-behavior: none;
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
    align-items: ${(props) => (props.$isUser ? "flex-end" : "flex-start")};
`;

const ChatInputPanel = styled.div`
    position: relative;
    width: 100%;
    padding: 20px;
    padding-top: 10px;
    box-sizing: border-box;
    flex-direction: column;
    border-top: var(--border-in-light);
    box-shadow: var(--card-shadow);
`;

const ChatInputPanelInner = styled.div`
    cursor: text;
    display: flex;
    flex: 1;
    border-radius: 10px;
    border: var(--border-in-light);
`;

const ChatInput = styled.textarea`
    height: 100%;
    width: 100%;
    border-radius: 10px;
    border: none;
    box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.03);
    font-family: inherit;
    padding: 10px 90px 10px 14px;
    resize: none;
    outline: none;
    box-sizing: border-box;
    min-height: 68px;

    &:focus {
        border: 1px solid var(--primary);
    }
`;

const ChatBody = styled.div`
    overflow-x: hidden;
    overflow: auto;
    position: relative;
    flex:1;
    padding: 20px 20px 40px;
    
    /* TODO: 重构布局 */
    max-height: 90vh;
    overscroll-behavior: none;
`;
export default function Chat() {
    // const messages: RequestMessage[] = [
    //     {
    //         role: "system",
    //         content: "这是系统的Content",
    //     },
    //     {
    //         role: "user",
    //         content: "这是聊天的Content",
    //     },
    // ];

    const messages = Array(15).fill(0).map((item) => ({
        role: "system",
        content: "这是系统的Content",
    }));
    return (
        <>
            <ChatBodyContainer>
                <ChatBody>
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
                </ChatBody>
                <ChatInputPanel>
                    <ChatInputPanelInner>
                        <ChatInput />
                        <IconButton
                            icon={<Send />}
                            className="button-class"
                            text="发送"
                        />
                    </ChatInputPanelInner>
                </ChatInputPanel>
            </ChatBodyContainer>
        </>
    );
}
