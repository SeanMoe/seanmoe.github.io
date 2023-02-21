import moment from 'moment';
import React from 'react';

class CountdownTimer extends React.Component {
    state = {
        countdownTime: '',
        intervalId: null,
    }

    componentDidMount() {
        const countdownDate = moment('2023-03-24 00:00:00');
        const intervalId = setInterval(() => {
            const now = moment();
            const diff = countdownDate.diff(now);
            const duration = moment.duration(diff);
            const days = Math.floor(duration.asDays());
            const hours = duration.hours();
            const minutes = duration.minutes();
            const seconds = duration.seconds();
            const countdownTime = `${days}d ${hours}h ${minutes}m ${seconds}s`;
            this.setState({ countdownTime, intervalId });
        }, 1000);
    }

    componentWillUnmount(){
        clearInterval(this.state.intervalId);
    }

    render(){
        return <div>{this.state.countdownTime}</div>
    }
};

export { CountdownTimer };