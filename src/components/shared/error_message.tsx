

const Error_message = ({ error }: { error: string }) => {
  return (
    <span className="text-sm text-red-500">{error}</span>
  )
}

export default Error_message