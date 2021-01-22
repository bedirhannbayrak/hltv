import React from 'react';
import ReactDOM from "react-dom";
import Card from './components/Card'
import Collapse from './components/Collapse'



function App() {
    return (
        <div>

            <div className='card-group'>
                <Collapse href='collapseExample1'>
                    <Card
                        cardTitle='Beşiktaş'
                        cardText='lorem ipsum text I'
                        updateTime='3 minutes ago'
                        image='https://picsum.photos/id/1/200/300'
                    />
                </Collapse>
                <Collapse href='collapseExample2'>
                    <Card
                        cardTitle='Gala'
                        cardText='lorem ipsum text II'
                        updateTime='3 minutes ago'
                        image='https://picsum.photos/id/2/200/300'
                    />
                </Collapse>
                <Collapse href='collapseExample3'>
                    <Card
                        cardTitle='fener'
                        cardText='lorem ipsum text III'
                        updateTime='3 minutes ago'
                        image='https://picsum.photos/id/5/200/300'
                    />
                </Collapse>

            </div>


        </div>
    )
}
ReactDOM.render(
    <App />,
    document.getElementById('root')
);