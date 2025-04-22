import "./Title.css";

const Title = ({ title, subTitle }: { title: string; subTitle: string }) => {
    return (
        <div className="title">
            <p>{title}</p>
            <h2>{subTitle}</h2>
        </div>
    );
};

export default Title;
