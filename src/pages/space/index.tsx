function SpacePage() {
  return (
    <>
      <p className='bg-blue-700 p-4'>box with padding</p>
      <p className='bg-yellow-600 m-4'>box with margin</p>
      <br/>

      {/* 两栏布局 */}
      <div className='flex min-h-screen'>
        <div className='w-1/5 bg-red-500 opacity-0'>side</div>
        <div className='w-4/5 bg-green-500'>main</div>
      </div>

    </>
  )
}

export default SpacePage
