import profile from '../../assets/images/profile.png'
const Header = () => {
    return (
        <header className='flex justify-between items-center p-7 mx-12 border-b-2'>
                  <h1 className="text-3xl font-bold">Inspiration Cafe</h1>
                  <img src={profile} alt="" />
        </header>
    );
};

export default Header;