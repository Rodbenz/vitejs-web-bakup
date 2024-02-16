import SmartCard from 'react-smart-card';
 
function ReaderSmartCard() {
    //data can be stored in a variable
    const headingText = "heading";
 
    //data can be stored in a object
    const myObj = {
      heading: 'heading',
      des: 'description',
      linkText: 'Read More',
      linkUrl: 'https://www.npmjs.com/package/react-smart-card'
    };
    //data can be simply passed as string as well
    return (
      <>
        <div className="flex container">
          <div className="col-md-4 pad-responsive">
            <SmartCard title={headingText} des="Text color can be customized" />
          </div>
          {/* <div className="col-md-4 pad-responsive">
            <SmartCard title={myObj.heading} des={myObj.des} linkText={myObj.linkText} linkUrl={myObj.linkUrl}/>
          </div> */}
        </div>
      </>
    );
}
 
export default ReaderSmartCard