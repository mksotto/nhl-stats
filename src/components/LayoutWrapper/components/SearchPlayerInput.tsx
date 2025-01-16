import {GetProps, Input} from "antd";
import { searchPlayerGet } from "../../../api/search.d3.hnle/searchPlayerGet";
import { FC } from "react";

type SearchProps = GetProps<typeof Input.Search>;

export const SearchPlayerInput: FC = () => {

    const onSearch: SearchProps['onSearch'] = (value) => searchPlayerGet(value).then(r => console.log(r));
    
    return (
        <>
            <Input.Search placeholder="Search player" onSearch={onSearch} allowClear style={{ width: 200 }} />    
        </>
    )
}