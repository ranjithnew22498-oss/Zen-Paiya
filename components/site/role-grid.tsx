import { cn } from '@/lib/utils';

type RoleGridProps = {
  roles: string[];
  className?: string;
};

export function RoleGrid({ roles, className }: RoleGridProps) {
  return (
    <div
      className={cn(
        'grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3',
        className
      )}
    >
      {roles.map((role) => (
        <div
          key={role}
          className="group flex items-center justify-center rounded-md border border-white/10 bg-card px-3 py-4 text-center transition-all duration-300 hover:border-brand-blue/30 hover:bg-brand-blue/5"
        >
          <span className="text-xs md:text-sm font-medium text-muted-foreground transition-colors group-hover:text-foreground">
            {role}
          </span>
        </div>
      ))}
    </div>
  );
}
