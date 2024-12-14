"use client";
import styled, { css } from "styled-components";
import "./globals.css";

const container = css`
  background-color: var(--white);
  border: var(--border-in-light);
  border-radius: 20px;
  box-shadow: var(--shadow);
  color: var(--black);
  background-color: var(--white);
  min-width: 600px;
  min-height: 370px;
  max-width: 1200px;

  overflow: hidden;
  box-sizing: border-box;

  width: var(--window-width);
  height: var(--window-height);
`;

const TightContainer = styled.div`
  @media only screen and (min-width: 600px) {
    ${container};
    --window-width: 100vw;
    --window-height: var(--full-height);
    --window-content-width: calc(100% - var(--sidebar-width));
    max-width: 100vw;
    max-height: var(--full-height);
    /* max-height: 80vh; */
    border-radius: 0;
    border: 0;
  }
`;
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="w-auto">
        <TightContainer>
          <div className="box-border px-20 flex justify-center">{children}</div>
        </TightContainer>
      </body>
    </html>
  );
}
