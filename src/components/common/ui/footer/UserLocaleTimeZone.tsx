export default function UserLocaleTimeZone(): JSX.Element {
    const userCurrentTime = new Date();
    const myTimeZone = new Date(userCurrentTime.toLocaleString('en-US', { timeZone: 'America/Argentina/Buenos_Aires' }));

    // const timeDifferenceMilliseconds = myTimeZone - userCurrentTime
    // const timeDifferenceMinutes = timeDifferenceMilliseconds / (1000 * 60);


    if(userCurrentTime.toLocaleDateString() === myTimeZone.toLocaleDateString()){
        return(
            <span className="font-SatoshiBold">(No time difference)</span>
        )
    }
    return <>
    <span>

    {userCurrentTime.toDateString()}
    {myTimeZone.toDateString()}
    </span>
    </>
}