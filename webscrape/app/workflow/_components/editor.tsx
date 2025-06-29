"use client"
import { WorkFlow } from '@/generated/prisma'
import React from 'react'
import { ReactFlowProvider } from 'reactflow'
import FlowEditor from './flow-editor'
import Topbar from './topbar/topbar'

const Editor = ({workflow} : {workflow: WorkFlow}) => {
  return (
    <ReactFlowProvider>
        <div className="flex flex-col h-full w-full overflow-hidden">
          <Topbar title="Workflow Editor:" subtitle={workflow.name}/>
            <section className="flex h-full overflow-auto">
                <FlowEditor workflow={workflow}/>
            </section>
        </div>
    </ReactFlowProvider>
  )
}

export default Editor