function ColorPage() {
  return (
    <div>
      {/* tailwindcss中默认字体都是相同的，也就是说，h1标签内的字体和p标签内的字体相同 */}
      <h1 className="text-6xl bg-green-600 text-yellow-200">
        Hello world!
      </h1>
      <p className='text-blue-500'>
        Hello Lesenelir!
      </p>
      <br/>

      <div className='border-4 border-myColor text-colorObject-blue1'>
        Border Test
      </div>
    </div>
  )
}

export default ColorPage
