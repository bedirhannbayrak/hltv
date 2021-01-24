import React from 'react';
import ReactDOM from "react-dom";
import Card from './components/Card'
import Collapse from './components/Collapse'


function App() {
    return (
        <div className='container'>
            <div className="row">
                <div className='card-group w-100'>
                    <div className="col">
                        <Collapse href='collapseExample1'>
                            <Card
                                cardTitle='Beşiktaş'
                                cardText='lorem ipsum text I'
                                updateTime='3 minutes ago'
                                image='https://picsum.photos/id/1/200/300'
                            />
                        </Collapse>
                    </div>
                    <div className="col">
                        <Collapse href='collapseExample2'>
                            <Card

                                cardText='lorem ipsum text II'
                                updateTime='3 minutes ago'
                                image='https://picsum.photos/id/2/200/300'
                            />
                        </Collapse>
                    </div>
                    <div className="col">
                        <Collapse href='collapseExample3'>
                            <Card
                                cardTitle='Beşiktaş'
                                cardText='lorem ipsum text III'
                                updateTime='3 minutes ago'
                                image='https://picsum.photos/id/3/200/300'
                            />
                        </Collapse>
                    </div>
                </div>
            </div>

        </div>
    )
}
ReactDOM.render(
    <App />,
    document.getElementById('root')
);