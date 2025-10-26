import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { Home, FolderOpen, Mail, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  const t = useTranslations('error.notFound');

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 px-4">
      <div className="max-w-2xl w-full text-center">
        {/* 404 Visual */}
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 animate-pulse">
            404
          </h1>
        </div>

        {/* Error Message */}
        <div className="space-y-4 mb-12">
          <h2 className="text-3xl font-bold text-gray-900">
            {t('title')}
          </h2>
          <p className="text-lg text-gray-600 max-w-md mx-auto">
            {t('description')}
          </p>
        </div>

        {/* Suggestions */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">
            {t('suggestions.title')}
          </h3>
          <div className="grid gap-4">
            <Link
              href="/"
              className="flex items-center justify-center gap-3 p-4 rounded-lg border-2 border-blue-200 hover:border-blue-400 hover:bg-blue-50 transition-all group"
            >
              <Home className="w-5 h-5 text-blue-600 group-hover:scale-110 transition-transform" />
              <span className="font-medium text-gray-700 group-hover:text-blue-600">
                {t('suggestions.home')}
              </span>
            </Link>

            <Link
              href="/#projects"
              className="flex items-center justify-center gap-3 p-4 rounded-lg border-2 border-purple-200 hover:border-purple-400 hover:bg-purple-50 transition-all group"
            >
              <FolderOpen className="w-5 h-5 text-purple-600 group-hover:scale-110 transition-transform" />
              <span className="font-medium text-gray-700 group-hover:text-purple-600">
                {t('suggestions.projects')}
              </span>
            </Link>

            <Link
              href="/#contact"
              className="flex items-center justify-center gap-3 p-4 rounded-lg border-2 border-green-200 hover:border-green-400 hover:bg-green-50 transition-all group"
            >
              <Mail className="w-5 h-5 text-green-600 group-hover:scale-110 transition-transform" />
              <span className="font-medium text-gray-700 group-hover:text-green-600">
                {t('suggestions.contact')}
              </span>
            </Link>
          </div>
        </div>

        {/* Back Button */}
        <button
          type="button"
          onClick={() => window.history.back()}
          className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Go back</span>
        </button>
      </div>
    </div>
  );
}
