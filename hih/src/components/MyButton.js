import Link from 'next/link'
/* ==========================================
REUSABLE  B U T T O N  | PROPS PASSED IN FROM PARENT COMPONENT
==========================================*/
function MyButton(props) {
  return (
      <button>
        <Link href={props.targetURL}>{props.displayText}</Link>
      </button>
  )
}
export default MyButton

