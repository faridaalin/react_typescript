export function Article(props: InewsItemProps) {
  const { title, urlToImage, author, description } = props

  return (
    <div>
      <h1>{title}</h1>
      <div className='img-container'>
        <img src={urlToImage} alt={urlToImage} />
        <span>{author}</span>
      </div>
      <p>{description}</p>
    </div>
  )
}
