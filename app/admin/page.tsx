import Link from 'next/link'
import { prisma } from '@/lib/prisma'
import { formatPrice } from '@/lib/utils'

// Forzamos dinamismo para ver datos frescos
export const dynamic = 'force-dynamic'

export default async function AdminPage() {
  // Datos rápidos para el dashboard
  const productsCount = await prisma.product.count()
  const ordersCount = await prisma.order.count()
  const usersCount = await prisma.user.count() // Contamos usuarios también
  
  // Datos adicionales ocultos para este avance

  // (Opcional) Calcular ingresos reales si deseas
  // const income = await prisma.order.aggregate({ _sum: { total: true } })

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Panel de Administración</h1>
      
      {/* Tarjetas de Resumen */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-blue-600 text-white p-6 rounded-lg shadow-lg">
          <h3 className="text-lg font-semibold opacity-90">Productos</h3>
          <p className="text-4xl font-bold mt-2">{productsCount}</p>
        </div>
        {/* Tarjetas de pedidos y usuarios ocultas */}
      </div>

      <h2 className="text-2xl font-bold mb-6 text-gray-800">Accesos Rápidos</h2>
      
      {/* BOTONES DE GESTIÓN (Ahora son 5 columnas en PC grande) */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-12">
        
        {/* 1. Productos */}
        <Link 
          href="/admin/productos"
          className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md hover:border-blue-300 transition-all flex flex-col items-center justify-center text-center group"
        >
          <div className="p-4 bg-blue-100 rounded-full mb-3 group-hover:bg-blue-200 text-blue-600">
             <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>
          </div>
          <span className="font-bold text-gray-700 group-hover:text-blue-600">Productos</span>
        </Link>

        {/* Botones de gestión extra ocultos */}

        {/* 5. Volver a Tienda */}
        <Link 
          href="/"
          className="bg-gray-50 p-6 rounded-xl shadow-inner border border-gray-200 hover:bg-gray-100 transition-all flex flex-col items-center justify-center text-center group"
        >
           <div className="p-4 bg-gray-200 rounded-full mb-3 text-gray-600">
             <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
          </div>
          <span className="font-bold text-gray-600">Ir a Tienda</span>
        </Link>

      </div>

      {/* Tabla de pedidos recientes oculta */}
    </div>
  )
}