import './App.css';
import Column from './components/Column';
import { Component } from 'react';
import { $getHotData, $getHotDataById } from './services/index.service';
export default class App extends Component {
    state = { hot: [] };
    getHotData = async () => {
        const data = await $getHotData();
        if (data) {
            this.setState({
                hot: data,
            });
        }
    };
    onRefresh = async id => {
        const data = await $getHotDataById(id);
        if (data) {
            const { hot } = this.state;
            hot.map(item => {
                return item.id === id ? { ...item, data } : item;
            });
            this.setState({
                hot,
            });
        }
    };
    componentDidMount() {
        this.getHotData();
    }

    render() {
        const { hot } = this.state;
        const columnList = hot.map((item, index) => {
            return (
                <Column
                    {...item}
                    onAppRefresh={id => {
                        this.onRefresh(id);
                    }}
                    key={index}
                ></Column>
            );
        });
        return (
            <div className="App bg-gray-50 flex flex-wrap px-2 py-2 sm:py-4">
                {hot.length ? columnList.map(item => item) : ''}
            </div>
        );
    }
}
