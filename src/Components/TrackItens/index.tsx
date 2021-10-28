import React from "react";
import { List, Item } from './styles'

export function TrackItens() {
    return (
        <List>
            <Item>
                <strong>1. </strong>
                <span>Nome da música</span>
                <time>3:32</time>
            </Item>

            <Item>
                <strong>2. </strong>
                <span>Nome da música</span>
                <time>3:32</time>
            </Item>

            <Item>
                <strong>3. </strong>
                <span>Nome da música</span>
                <time>3:32</time>
            </Item>

            <Item>
                <strong>4. </strong>
                <span>Nome da música</span>
                <time>3:32</time>
            </Item>

            <Item>
                <strong>5. </strong>
                <span>Nome da música</span>
                <time>3:32</time>
            </Item>
        </List>
    )
}