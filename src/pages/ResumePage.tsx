import Header from "@/components/Header";
import Resume from "@/components/Resume";

const ResumePage = () => {
    return (
        <div className="min-h-screen bg-background">
            <Header />
            <main className="container mx-auto max-w-3xl px-6 py-16">
                <Resume />
            </main>
        </div>
    );
};

export default ResumePage;
