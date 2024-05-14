import ImageControl from "./control.png";
import Image from "next/image";

export function Sections() {
  return (
    <div className="sections">
      <div className="section">
        <h2>Better control the AI's output</h2>
        <p className="description">Unlike any tool you’ve used before.  Not only can you control the AI's output with text commands, but you also control the AI in various ways to generate images that meet your requirements.</p>
        <div className="section-block image">
          <Image src={ImageControl.src} width={1636} height={839} alt="contrlboard"/>
        </div>
      </div>

      <div className="flex">
        <DebugMode />
        <div className="box">
          <RichTemplates />
          <WorkflowManagement />
        </div>
      </div>
      
    </div>
  )
}

function DebugMode() {
  return (
    <div className="section-block debug-mode">
      <h2>Debug Mode</h2>
      <p className="description">Error notification accurate to the node, making problem localization more convenient and precise.</p>
    </div>
  )
}

function RichTemplates() {
  return (
    <div className="section-block rich-templates">
      <h2>Rich Templates</h2>
      <p className="description">Setting up a workflow is tedious? The product supports one-click use of templates, eliminating the hassle of building workflows.</p>
    </div>
  )
}

function WorkflowManagement() {
  return (
    <div className="section-block workflow-management">
      <h2>Workflow Management</h2>
      <p className="description">Manage your Workflow more conveniently, and every change you make will be automatically saved, so you no longer need to manually export and save your workflow.</p>
    </div>
  )
}