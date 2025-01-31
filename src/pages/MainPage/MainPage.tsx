import {FC, useState} from 'react';
import { Flex, Segmented } from 'antd';
import { LeaderStats } from './components/LeaderStats/LeaderStats';
import {SearchPlayerPage} from "../SearchPlayerPage/SearchPlayerPage.tsx";

const getPage = (currentTab: string) => {
    switch(currentTab) {
        case 'home':
            return (<LeaderStats />);
        case 'search':
            return (<SearchPlayerPage />);
        case 'skaters':
            return (<div>dasda</div>);
        case 'goalie':
            return (<div>dasda</div>);
        case 'teams':
            return (<div>dssssssssss</div>);
    }
}

export const MainPage: FC = () => {
    const [tabValue, setTabValue] = useState('home')
    
    return (
        <>
            <Flex justify='center' gap={8}>
                <Segmented 
                    options={[
                        {value: 'home', label: 'Home'},
                        {value: 'search', label: 'Search'},
                        // {value: 'skaters', label: 'Skaters'},
                        // {value: 'goalie', label: 'Goalie'},
                        // {value: 'teams', label: 'Teams'},
                    ]}
                    size='large'
                    value={tabValue}
                    onChange={setTabValue}
                    block={true}
                    />
            </Flex>
            <div>{getPage(tabValue)}</div>
        </>
    )
}