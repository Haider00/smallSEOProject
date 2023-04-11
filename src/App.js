import logo from './logo.svg';
import './App.css';
import TextAnalysisTools from './components/TextAnalysisTools/textAnalysisTools';
import DesignStudio from './components/designStudio/designStudio';
import ImageEditingTools from './components/ImagesEditingTools/imageEditingTools';
import KeyWordsTools from './components/keyWordsTools/keyWordsTools';
import BackLinkTools from './components/backlinkTools/backlinkTools';
import WebsiteManagementTool from './components/websiteManagementTool/websiteManagementTool';
import WebsiteTrackingTool from './components/websiteTrackingTool/websiteTrackingTool';
import ProxyTools from './components/proxyTools/proxyTools';
import DomainTools from './components/domainTools/domainTools';
import MetaTagTools from './components/metaTagTools/metaTagTools';
import PasswordManagementTools from './components/passwordManagementTools/passwordManagementTools';
import OnlinePDFTools from './components/onlinePDFTools/onlinePDFTools';
import DevelopmentTools from './components/developmentTools/developmentTools';
import UnitConverterTools from './components/unitConverterTools/unitConverterTools';
import BinaryConverterTool from './components/binaryConverterTool/binaryConverterTool';
import OnlineCalculator from './components/onlineCalculator/onlineCalculator';
import OtherTools from './components/otherTools/otherTools';
import NavBar from './components/home/NavBar'
import Footer from './components/footer/footer';
import Slider from './components/footer/slider';
import MetaTagAnalyzerUI from './components/metaTagAnalyzerUI/metaTagAnalyzerUI';
import MetaTagAnalyzerDescription from './components/metaTagAnalyzerUI/metaTagAnalyzerDescription';
import MetaTagGenerator from './components/metaTagGeneratorUI/metaTagGeneratorUI';
import MetaTagGeneratorDescription from './components/metaTagGeneratorUI/metaTagGeneratorDescription';
import PasswordEncryptionUtilityUI from './components/passwordEncryptionUtilityUI/passwordEncryptionUtilityUI';
import PasswordEncryptionDescription from './components/passwordEncryptionUtilityUI/passwordEncryptionUtilityDescription';
import PasswordStrengthCheckerUI from './components/passwordStrengthCheckerUI/passwordStrengthCheckerUI';
import PasswordStrengthCheckerDescription from './components/passwordStrengthCheckerUI/passwordStrengthCheckerDescription';
import PasswordGeneratorUI from './components/passwordGeneratorUI/passwordGeneratorUI';
import PasswordGeneratorDescription from './components/passwordGeneratorUI/passwordGeneratorDescription';

function App() {
  return (
    <div className="container">
      {/* <MetaTagAnalyzerUI/>
      <MetaTagAnalyzerDescription/> */}
      {/* <MetaTagGenerator/>
      <MetaTagGeneratorDescription/> */}
      {/* <PasswordEncryptionUtilityUI/>
      <PasswordEncryptionDescription/> */}
      {/* <PasswordStrengthCheckerUI/>
      <PasswordStrengthCheckerDescription/> */}
      {/* <PasswordGeneratorUI/>
      <PasswordGeneratorDescription/> */}
      <NavBar/>
      <TextAnalysisTools/>
      <DesignStudio/>
      <ImageEditingTools/>
      <KeyWordsTools/>
      <BackLinkTools/>
      <WebsiteManagementTool/>
      <WebsiteTrackingTool/>
      <ProxyTools/>
      <DomainTools/>
      <MetaTagTools/>
      <PasswordManagementTools/>
      <OnlinePDFTools/>
      <DevelopmentTools/>
      <UnitConverterTools/>
      <BinaryConverterTool/>
      <OnlineCalculator/>
      <OtherTools/>
      <Slider/>
      <Footer/>
    </div>
    );
}

export default App;
