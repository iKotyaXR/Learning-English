import { type FC, type Key, useState } from "react";
import { Glass } from "../../../lib/GlassDesign/Components/Glass/Glass.tsx";
import type { ITab } from "./types.ts";
import styled from "styled-components";

interface IProps {
    tabs: ITab[];
    onTabChange: (tab: ITab) => void;
}

const TabsContainer = styled(Glass)`
    padding: 4px;
    display: flex;
    flex-direction: row;
    gap: 8px;
    border-radius: 32px;
`;

const TabContainer = styled.button`
    padding: 8px;
    background-color: unset;
    outline: none;
    border-radius: 16px;
    width: 100%;
    border: none;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    transition: 0.3s;
`;

export const Tabs: FC<IProps> = ({ tabs, onTabChange }) => {
    const [activeTab, setActiveTab] = useState<Key | null | undefined>(
        tabs[0].value,
    );

    return (
        <TabsContainer>
            {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                    <TabContainer
                        onClick={() => {
                            onTabChange(tab);
                            setActiveTab(tab.value);
                        }}
                        key={tab.value}
                        style={{
                            backgroundColor:
                                activeTab === tab.value
                                    ? "rgba(255, 255, 255, 0.3)"
                                    : "unset",
                        }}
                    >
                        {Icon && <Icon size={16} />}
                        {tab.title}
                    </TabContainer>
                );
            })}
        </TabsContainer>
    );
};
