function AboutMe(props) {
    return (
        <div>
            <h1>{props.fullName}</h1>
            <h2>{props.clgName}</h2>
            <p>{props.address}</p>
        </div>
    );
}

export default AboutMe;