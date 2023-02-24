import React from 'react';

class CountdownTimer extends React.Component {
    state = {
        countdownTime: '',
        intervalId: null,
    }

    componentDidMount() {
        const targetDate = new Date('2023-03-24T13:59:00-0800');
        const intervalId = setInterval(() => {
            const now = new Date();
            const diff = targetDate - now;
            const days = Math.floor(diff / (1000*60*60*24));
            const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
            const minutes = Math.floor((diff / 1000 / 60) % 60);
            const seconds = Math.floor((diff / 1000) % 60);
            const units = [
                { value: days, label: 'day' },
                { value: hours, label: 'hour' },
                { value: minutes, label: 'minute' },
                { value: seconds, label: 'second' },
            ];
            const countdownTime = units.reduce((acc, { value, label }) => {
                const pluralizedLabel = value === 1 ? label : `${label}s`;
                return `${acc} ${value} ${pluralizedLabel}`;
              }, '');
            this.setState({ countdownTime, intervalId });
        }, 1000);
    }

    componentWillUnmount(){
        clearInterval(this.state.intervalId);
    }

    render(){
        return<div className="text-center font-vw backdrop-blur-sm p-5 rounded-lg">
        <p className="mb-5 text-xl md:text-5xl">Suzie and Priya Land in <span class="blinker2">Vegas!</span></p>
        <p className="text-2xl md:text-6xl">{this.state.countdownTime}</p>
        <p className="mt-6 blinker">Happy Suzie Birthday!</p>
        </div>
    }
};

export { CountdownTimer };