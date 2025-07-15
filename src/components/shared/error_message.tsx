

const Errormessage = ({ error }: { error: string }) => {
  return (
    <span className="text-sm text-red-500">{error}</span>
  )
}

export default Errormessage