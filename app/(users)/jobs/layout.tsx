import Navbar from "@/app/_components/UserNavbar";

export default function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div>
            <Navbar/>
            {children}
        </div>
    );
}
