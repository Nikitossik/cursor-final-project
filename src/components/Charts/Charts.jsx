import React from 'react';
import { VictoryChart, VictoryZoomContainer, VictoryLine, VictoryBrushContainer, VictoryAxis } from 'victory';
import BalanceHeader from '../BalanceHeader';

class Charts extends React.Component {
    constructor() {
        super();
        this.state = {
            externalMutations: undefined,
            status: true
        };
    }

    showCharges() {
        this.setState({
            externalMutations: [
                {
                    childName: "Charges",
                    target: ["data"],
                    eventKey: "all",

                    mutation: this.state.status ? () => (this.state.status = false, { style: { stroke: "none" } }) : () => (this.state.status = true, { style: { stroke: "blue", } })

                }
            ]
        })
    }

    showIncomes() {
        this.setState({
            externalMutations: [
                {
                    childName: "Incomes",
                    target: ["data"],
                    eventKey: "all",

                    mutation: this.state.status ? () => (this.state.status = false, { style: { stroke: "none" } }) : () => (this.state.status = true, { style: { stroke: "red", } })

                }
            ]
        });
    }


    render() {
        const {balance} = this.props;
        const chargesButtonStyle = {
            backgroundColor: "blue",
            color: "white",
            padding: "10px",
            marginTop: "10px",
            style: true
        };
        const incomesButtonStyle = {
            backgroundColor: "red",
            color: "white",
            padding: "10px",
            marginTop: "10px",
            style1: true
        };
        return (
            <section  className='charts-page page'>
                {/* <BalanceHeader balance={balance}/>
                <button
                    onClick={this.showCharges.bind(this)}
                    style={chargesButtonStyle}
                >
                    Charges
                </button>
                <button
                    onClick={this.showIncomes.bind(this)}
                    style={incomesButtonStyle}
                >
                    Incomes
                </button>
                <VictoryChart domain={{ x: [1, 4] }}
                    externalEventMutations={this.state.externalMutations}
                    events={[
                        {
                            target: "data",
                            childName: "Charges",

                        },
                        {
                            target: "data",
                            childName: "Incomes",

                        }

                    ]}
                >
                    <VictoryLine name="Charges"
                        style={{ data: { stroke: "blue" } }}

                        data={[
                            { x: '23.08', y: 6 },
                            { x: '24.08', y: 5 },
                            { x: '25.08', y: 26 },
                            { x: '26.08', y: 11 }
                        ]}
                    />
                    <VictoryLine name="Incomes"
                        style={{ data: { stroke: "red" } }}

                        data={[
                            { x: '23.08', y: 1 },
                            { x: '24.08', y: 2 },
                            { x: '25.08', y: 3 },
                            { x: '26.08', y: 4 }
                        ]}
                    />
                </VictoryChart> */}
            </section>
        )
    }
}

export default Charts;