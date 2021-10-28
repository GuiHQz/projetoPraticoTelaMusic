import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Home } from '../pages/Home';
import { ListTrack } from '../pages/ListTrack';

export function Router() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="/list-track">
                    <ListTrack />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}