import React from 'react';
import RegistryItem from './RegistryItem';
import store from './store';

export default class extends React.Component {

    constructor() {
        super();
        this.state = store.getState();
        this.RegistryItem = RegistryItem.bind(this);
    }

    componentWillMount () {
        store.subscribe(() => this.setState(store.getState()));
    }

    render() {
        let registryItems = this.state.registryItems;
        // console.log(registryItems);
        return (
            <div>
                <h1>My Registry</h1>
                <div>
                {
                    registryItems && registryItems.map(item => <RegistryItem itemDetails={item} key={item.id}/>)
                }
                </div>
            </div>
        );
    }

}