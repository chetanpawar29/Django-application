import React from 'react';
import { ServiceRequestForm } from './ServiceRequestForm';
import { RequestTracker } from './RequestTracker';

// Mock data for demonstration
const mockRequests = [
  {
    id: "SR001",
    type: "Gas Leak",
    description: "Strong gas smell in the basement",
    status: "resolved",
    createdAt: "2024-03-10T10:00:00Z",
    resolvedAt: "2024-03-10T14:30:00Z"
  },
  {
    id: "SR002",
    type: "Meter Reading",
    description: "Need updated meter reading",
    status: "in-progress",
    createdAt: "2024-03-11T09:15:00Z"
  }
] as const;

export function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Gas Utility Customer Portal</h1>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h2 className="text-xl font-semibold mb-4">Submit New Request</h2>
              <div className="bg-white rounded-lg shadow p-6">
                <ServiceRequestForm />
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">Your Requests</h2>
              <div className="space-y-4">
                {mockRequests.map((request) => (
                  <RequestTracker key={request.id} request={request} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}