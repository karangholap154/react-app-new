function SportsList() {
    const sports = ["Cricket", "Football", "Hockey", "Boxing"];
    
    if (sports.length === 0) {
        return <h1>The array has no element</h1>;
    } else {
        return (
            <div>
                <ul>
                    {sports.map((element, index) => <li key={index}>{element}</li>)}
                </ul>
            </div>
        );
    }
}

export default SportsList;