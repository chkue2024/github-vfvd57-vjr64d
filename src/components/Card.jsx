export default function Card(props) {
  return (
    <div 
    class="bg-white p-4 text-center rounded-md shadow-ms">
     
     {props.children}
    </div>
  )
}