const Rooster = {}

Rooster.announceDawn = () => {
    return 'cock-a-doodle-doo!'
}

Rooster.timeAtDawn = (hour) => {
    if(hour < 0 || hour > 23){
        throw new RangeError;
    }else{
        return hour.toString();
    };
}

module.exports = Rooster;