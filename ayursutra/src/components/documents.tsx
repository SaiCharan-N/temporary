import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Input } from './ui/input';
import { ArrowLeft, Upload, Download, FileText, Image, File, Search, Calendar, User, Eye, Trash2 } from 'lucide-react';

interface DocumentsProps {
  onPageChange: (page: string) => void;
}

export function Documents({ onPageChange }: DocumentsProps) {
  const [searchTerm, setSearchTerm] = React.useState('');

  const documents = [
    {
      id: 1,
      name: 'Blood Test Results - Dec 2024',
      type: 'Lab Report',
      size: '2.4 MB',
      uploadDate: '2024-12-13',
      uploadedBy: 'Dr. Kamal Raj',
      category: 'lab-reports',
      fileType: 'pdf',
      status: 'reviewed'
    },
    {
      id: 2,
      name: 'Initial Consultation Notes',
      type: 'Medical Record',
      size: '1.2 MB',
      uploadDate: '2024-11-28',
      uploadedBy: 'Dr. Kamal Raj',
      category: 'medical-records',
      fileType: 'pdf',
      status: 'reviewed'
    },
    {
      id: 3,
      name: 'Progress Photos - Week 3',
      type: 'Progress Images',
      size: '3.8 MB',
      uploadDate: '2024-12-10',
      uploadedBy: 'Priya Sharma',
      category: 'progress-photos',
      fileType: 'image',
      status: 'pending'
    },
    {
      id: 4,
      name: 'Dietary Guidelines - Vata-Pitta',
      type: 'Educational Material',
      size: '856 KB',
      uploadDate: '2024-11-30',
      uploadedBy: 'Dr. Kamal Raj',
      category: 'educational',
      fileType: 'pdf',
      status: 'reviewed'
    },
    {
      id: 5,
      name: 'Insurance Pre-Authorization',
      type: 'Insurance Document',
      size: '1.1 MB',
      uploadDate: '2024-11-25',
      uploadedBy: 'Priya Sharma',
      category: 'insurance',
      fileType: 'pdf',
      status: 'approved'
    },
    {
      id: 6,
      name: 'Treatment Plan - Phase 2',
      type: 'Treatment Plan',
      size: '967 KB',
      uploadDate: '2024-12-05',
      uploadedBy: 'Dr. Kamal Raj',
      category: 'treatment-plans',
      fileType: 'pdf',
      status: 'active'
    }
  ];

  const getFileIcon = (fileType: string) => {
    switch (fileType) {
      case 'pdf': return FileText;
      case 'image': return Image;
      default: return File;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'reviewed': return 'bg-green-100 text-green-700 border-green-200';
      case 'approved': return 'bg-blue-100 text-blue-700 border-blue-200';
      case 'active': return 'bg-purple-100 text-purple-700 border-purple-200';
      case 'pending': return 'bg-yellow-100 text-yellow-700 border-yellow-200';
      default: return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'lab-reports': return 'bg-red-50 text-red-700';
      case 'medical-records': return 'bg-blue-50 text-blue-700';
      case 'progress-photos': return 'bg-purple-50 text-purple-700';
      case 'educational': return 'bg-green-50 text-green-700';
      case 'insurance': return 'bg-orange-50 text-orange-700';
      case 'treatment-plans': return 'bg-emerald-50 text-emerald-700';
      default: return 'bg-gray-50 text-gray-700';
    }
  };

  const filteredDocuments = documents.filter(doc =>
    searchTerm === '' ||
    doc.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    doc.type.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const documentsByCategory = filteredDocuments.reduce((acc, doc) => {
    if (!acc[doc.category]) {
      acc[doc.category] = [];
    }
    acc[doc.category].push(doc);
    return acc;
  }, {} as Record<string, typeof documents>);

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
      <div className="p-6 max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold text-emerald-900 mb-2">My Documents</h1>
            <p className="text-emerald-600">Manage your medical documents and lab reports</p>
          </div>
          <Button
            onClick={() => onPageChange('patient-dashboard')}
            variant="outline"
            className="border-emerald-300 text-emerald-700 hover:bg-emerald-50"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Dashboard
          </Button>
        </div>

        {/* Upload and Search */}
        <Card className="mb-6">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  placeholder="Search documents..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Button className="bg-emerald-600 hover:bg-emerald-700">
                <Upload className="w-4 h-4 mr-2" />
                Upload Document
              </Button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center p-3 bg-emerald-50 rounded-lg">
                <p className="text-2xl font-bold text-emerald-900">{documents.length}</p>
                <p className="text-sm text-emerald-600">Total Documents</p>
              </div>
              <div className="text-center p-3 bg-blue-50 rounded-lg">
                <p className="text-2xl font-bold text-blue-900">
                  {documents.filter(d => d.category === 'lab-reports').length}
                </p>
                <p className="text-sm text-blue-600">Lab Reports</p>
              </div>
              <div className="text-center p-3 bg-purple-50 rounded-lg">
                <p className="text-2xl font-bold text-purple-900">
                  {documents.filter(d => d.category === 'progress-photos').length}
                </p>
                <p className="text-sm text-purple-600">Progress Photos</p>
              </div>
              <div className="text-center p-3 bg-orange-50 rounded-lg">
                <p className="text-2xl font-bold text-orange-900">
                  {documents.filter(d => d.status === 'pending').length}
                </p>
                <p className="text-sm text-orange-600">Pending Review</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Documents by Category */}
        <div className="space-y-6">
          {Object.entries(documentsByCategory).map(([category, categoryDocs]) => (
            <Card key={category}>
              <CardHeader>
                <CardTitle className="capitalize flex items-center space-x-2">
                  <FileText className="w-5 h-5 text-emerald-600" />
                  <span>{category.replace('-', ' ')}</span>
                  <Badge className={getCategoryColor(category)}>
                    {categoryDocs.length} files
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  {categoryDocs.map((doc) => {
                    const FileIcon = getFileIcon(doc.fileType);
                    return (
                      <div key={doc.id} className="flex items-center space-x-4 p-4 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
                        <div className="p-2 bg-gray-100 rounded-lg">
                          <FileIcon className="w-6 h-6 text-gray-600" />
                        </div>
                        
                        <div className="flex-1 min-w-0">
                          <h3 className="font-medium text-gray-900 truncate">{doc.name}</h3>
                          <div className="flex items-center space-x-3 text-sm text-gray-500 mt-1">
                            <span>{doc.type}</span>
                            <span>•</span>
                            <span>{doc.size}</span>
                            <span>•</span>
                            <div className="flex items-center space-x-1">
                              <Calendar className="w-3 h-3" />
                              <span>{doc.uploadDate}</span>
                            </div>
                            <span>•</span>
                            <div className="flex items-center space-x-1">
                              <User className="w-3 h-3" />
                              <span>{doc.uploadedBy}</span>
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center space-x-2">
                          <Badge className={getStatusColor(doc.status)} variant="outline">
                            {doc.status}
                          </Badge>
                          
                          <div className="flex items-center space-x-1">
                            <Button variant="outline" size="sm" className="p-2">
                              <Eye className="w-4 h-4" />
                            </Button>
                            <Button variant="outline" size="sm" className="p-2">
                              <Download className="w-4 h-4" />
                            </Button>
                            <Button variant="outline" size="sm" className="p-2 text-red-600 hover:bg-red-50">
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Upload Guidelines */}
        <Card className="mt-6">
          <CardHeader>
            <CardTitle>Upload Guidelines</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-medium text-gray-900 mb-2">Accepted File Types</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• PDF documents (.pdf)</li>
                  <li>• Images (.jpg, .png, .gif)</li>
                  <li>• Microsoft Word (.doc, .docx)</li>
                  <li>• Excel files (.xls, .xlsx)</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium text-gray-900 mb-2">Important Notes</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Maximum file size: 10 MB</li>
                  <li>• Lab reports are automatically flagged for practitioner review</li>
                  <li>• Progress photos help track your treatment journey</li>
                  <li>• Keep insurance documents up to date</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}