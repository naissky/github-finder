import { GitHubRepo } from "@/lib/types";
import { Star, GitFork } from "lucide-react";

interface RepoListProps {
  repos: GitHubRepo[];
}

export function RepoList({ repos }: RepoListProps) {
  if (repos.length === 0) return null;

  return (
    <div className="w-full max-w-2xl mt-6">
      <h2 className="text-xl text-[#CDD5E0] font-bold mb-4">Latest Repositories</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {repos.map((repo) => (
          <a key={repo.id} className="hover:rotate-2 ease-in-out duration-200" target="blank" href={repo.html_url}>
            <div
              className="bg-zinc-950 text-[#CDD5E0] p-4 rounded-lg border hover:bg-zinc-900 ease-in-out duration-200 hover:shadow-md transition-shadow "
            >
              <a
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium hover:text-primary ease-in-out duration-200"
              >
                {repo.name}
              </a>
              {repo.description && (
                <p className="text-sm text-muted-foreground mt-2 line-clamp-2">
                  {repo.description}
                </p>
              )}
              <div className="flex items-center gap-4 mt-3 text-sm">
                {repo.language && (
                  <span className="flex text-[#3662E3] items-center gap-1">
                    <span className="w-3 h-3 rounded-full bg-primary"></span>
                    {repo.language}
                  </span>
                )}
                <span className="flex items-center gap-1">
                  <Star size={16} />
                  {repo.stargazers_count}
                </span>
                <span className="flex items-center gap-1">
                  <GitFork size={16} />
                  {repo.forks_count}
                </span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
