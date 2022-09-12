const HeaderTitle = (props) => {
    return ( 
        <div className="name_title" data-scroll data-scroll-speed="-1">
            {props.title}
        </div>
     );
}
 
export default HeaderTitle;