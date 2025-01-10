
const Footer = () => {
    return (
        <div className="p-5 bg-[#eef6ff] border-t-2 border-[#374c4438]">
            <div className="container mx-auto">
                <p className="text-center text-[#1c1c1d]">&copy;{new Date().getFullYear()} Flight Management System. All rights reserved.</p>
            </div>
        </div>
    );
};

export default Footer;