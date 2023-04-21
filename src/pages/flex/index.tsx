function FlexPage() {
  return (
    <div className='parent'>
      <div>Header</div>
      {/* variant modifier => status or media query */}
      <div className="flex flex-row md:flex-row-reverse">
        <div className='grow'>Main Content</div>
        <div className='flex flex-col flex-none'>
          <div>Sidebar</div>
          <div>Menu</div>
        </div>
      </div>
    </div>
  )
}

export default FlexPage
