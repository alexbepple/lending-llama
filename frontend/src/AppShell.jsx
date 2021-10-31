import React from "react";

// stripped down from starting point: Tailwind UI: "Light nav on gray background"
// https://tailwindui.com/components/application-ui/application-shells/stacked#component-7022793f3a06d980f7d7f8394a057092
export const AppShell = ({children}) => (
  <div className="min-h-full">
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <img
                className="block lg:hidden h-8 w-auto"
                src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                alt="Workflow"
              />
              <img
                className="hidden lg:block h-8 w-auto"
                src="https://tailwindui.com/img/logos/workflow-logo-indigo-600-mark-gray-800-text.svg"
                alt="Workflow"
              />
            </div>
          </div>
        </div>
      </div>
    </nav>

    <div className="py-10">
      <main>
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          {children}
        </div>
      </main>
    </div>
  </div>
);
