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
            const units = [
                { value: days, label: 'day' },
                { value: hours, label: 'hour' },
                { value: minutes, label: 'minute' },
                { value: seconds, label: 'second' },
            ];
            const countdownTime = units.reduce((acc, { value, label }) => {
                // determine whether the value is 1 or not to choose the appropriate pluralization
                const pluralizedLabel = value === 1 ? label : `${label}s`;
                return value > 0 ? `${acc} ${value} ${pluralizedLabel}` : acc;
              }, '');
            this.setState({ countdownTime, intervalId });
        }, 1000);
    }

    componentWillUnmount(){
        clearInterval(this.state.intervalId);
    }

    render(){
        return<div className="text-center font-vw backdrop-blur-sm p-5 rounded-lg">
        <p className="mb-5 text-xl md:text-5xl">Days Until Vegas:</p>
        <p className="text-2xl md:text-6xl">{this.state.countdownTime}</p>
        <p className="mt-6">Happy Suzie Birthday!</p>
        </div>
    }
};

export { CountdownTimer };