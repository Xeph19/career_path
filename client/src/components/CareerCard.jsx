function CareerCard({ title, description, tags}){
   return(
    <div className="career-card">
        <div className="career-header">
            <h2>{title}</h2>
        </div>
        <p className="career-description">{description}</p>

        <div className="career-tags">
            {tags.map((tag, index ) => (
                <span className="tag" key={index}>
                    {tag}
                </span>
            ))}
        </div>
    </div>
   );
}
export default CareerCard;