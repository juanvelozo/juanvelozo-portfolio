export default function Container ({
  children,
}: {
  children: React.ReactNode
}):JSX.Element {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between m-16 border-2 !overflow-y-auto">{children}</main>
    )
}