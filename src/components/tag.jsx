export default function Tag({key, txt}) {
    return (
      <button key={key} className="tag">{txt}</button>
    )
  }