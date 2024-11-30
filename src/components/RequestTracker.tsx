import React from 'react';
import { Clock, CheckCircle, AlertCircle } from 'lucide-react';
import type { ServiceRequest } from '../types';

interface RequestTrackerProps {
  request: ServiceRequest;
}

export function RequestTracker({ request }: RequestTrackerProps) {
  const getStatusIcon = () => {
    switch (request.status) {
      case 'resolved':
        return <CheckCircle className="text-green-500" />;
      case 'in-progress':
        return <Clock className="text-yellow-500" />;
      default:
        return <AlertCircle className="text-blue-500" />;
    }
  };

  return (
    <div className="bg-white rounded-lg shadow p-6 mb-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-medium">Request #{request.id}</h3>
        <div className="flex items-center gap-2">
          {getStatusIcon()}
          <span className="capitalize">{request.status}</span>
        </div>
      </div>
      
      <div className="space-y-3">
        <div>
          <p className="text-sm text-gray-500">Type</p>
          <p className="font-medium">{request.type}</p>
        </div>
        
        <div>
          <p className="text-sm text-gray-500">Description</p>
          <p className="text-gray-700">{request.description}</p>
        </div>

        <div className="flex justify-between">
          <div>
            <p className="text-sm text-gray-500">Submitted</p>
            <p className="font-medium">{new Date(request.createdAt).toLocaleDateString()}</p>
          </div>
          {request.resolvedAt && (
            <div>
              <p className="text-sm text-gray-500">Resolved</p>
              <p className="font-medium">{new Date(request.resolvedAt).toLocaleDateString()}</p>
            </div>
          )}
        </div>

        {request.attachments && request.attachments.length > 0 && (
          <div>
            <p className="text-sm text-gray-500 mb-2">Attachments</p>
            <div className="flex gap-2">
              {request.attachments.map((attachment, index) => (
                <a
                  key={index}
                  href={attachment}
                  className="text-blue-600 hover:text-blue-800 text-sm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  File {index + 1}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}