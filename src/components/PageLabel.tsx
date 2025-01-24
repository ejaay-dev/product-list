interface PageLabelProps {
  pageLabel: string
}

export const PageLabel = ({ pageLabel }: PageLabelProps) => {
  return (
    <>
      <div className="flex items-center h-[50px] w-[200px] ml-8 mt-8 md:m-16">
        <h1 className="font-redhat font-semibold text-3xl text-custom-rose-900">
          {pageLabel}
        </h1>
      </div>
    </>
  )
}
